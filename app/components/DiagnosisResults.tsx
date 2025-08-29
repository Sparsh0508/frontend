import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { AlertTriangle, CheckCircle, Info, Volume2 } from 'lucide-react-native';

interface DiagnosisData {
  disease?: string;
  confidence?: number;
  severity?: 'low' | 'medium' | 'high';
  recommendations?: string[];
  description?: string;
}

interface DiagnosisResultsProps {
  results: DiagnosisData | null;
  isLoading?: boolean;
  onPlayAudio?: () => void;
}

 const DiagnosisResults: React.FC<DiagnosisResultsProps> = ({ 
  results, 
  isLoading, 
  onPlayAudio 
}) => {
  if (isLoading) {
    return (
      <Card className="p-6 animate-pulse">
        <div className="space-y-4">
          <div className="h-6 bg-muted rounded w-3/4"></div>
          <div className="h-4 bg-muted rounded w-1/2"></div>
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded"></div>
            <div className="h-4 bg-muted rounded w-5/6"></div>
            <div className="h-4 bg-muted rounded w-4/6"></div>
          </div>
        </div>
      </Card>
    );
  }

  if (!results) {
    return (
      <Card className="p-6 border-dashed">
        <div className="text-center text-muted-foreground">
          <Info className="mx-auto h-12 w-12 mb-2 opacity-50" />
          <p>Upload an image or record a voice query to get started</p>
        </div>
      </Card>
    );
  }

  const getSeverityIcon = (severity?: string) => {
    switch (severity) {
      case 'high':
        return <AlertTriangle className="h-5 w-5 text-destructive" />;
      case 'medium':
        return <AlertTriangle className="h-5 w-5 text-warning" />;
      case 'low':
        return <CheckCircle className="h-5 w-5 text-success" />;
      default:
        return <Info className="h-5 w-5 text-primary" />;
    }
  };

  const getSeverityColor = (severity?: string) => {
    switch (severity) {
      case 'high':
        return 'destructive';
      case 'medium':
        return 'warning';
      case 'low':
        return 'success';
      default:
        return 'secondary';
    }
  };

  return (
    <Card className="p-6 transition-all duration-300 hover:shadow-card animate-slide-up">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              {getSeverityIcon(results.severity)}
              <h3 className="text-xl font-semibold">
                {results.disease || 'Diagnosis Complete'}
              </h3>
            </div>
            {results.confidence && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Confidence:</span>
                <Badge variant="secondary">
                  {Math.round(results.confidence * 100)}%
                </Badge>
              </div>
            )}
          </div>
          
          {results.severity && (
            <Badge variant={getSeverityColor(results.severity) as any}>
              {results.severity.charAt(0).toUpperCase() + results.severity.slice(1)} Risk
            </Badge>
          )}
        </div>

        {/* Description */}
        {results.description && (
          <div className="space-y-2">
            <h4 className="font-medium">Description</h4>
            <p className="text-muted-foreground leading-relaxed">
              {results.description}
            </p>
          </div>
        )}

        {/* Recommendations */}
        {results.recommendations && results.recommendations.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-medium">Recommendations</h4>
            <ul className="space-y-2">
              {results.recommendations.map((recommendation, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{recommendation}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Audio playback */}
        {onPlayAudio && (
          <div className="pt-4 border-t">
            <Button variant="outline" onClick={onPlayAudio} className="w-full">
              <Volume2 className="h-4 w-4 mr-2" />
              Listen to Audio Response
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default DiagnosisResults;