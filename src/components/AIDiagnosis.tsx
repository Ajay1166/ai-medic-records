
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Mic, FileText, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';

interface DiagnosisResult {
  diagnosis: string;
  confidence: number;
  prescription: string;
  recommendations: string[];
}

const AIDiagnosis: React.FC = () => {
  const [symptoms, setSymptoms] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [diagnosisResult, setDiagnosisResult] = useState<DiagnosisResult | null>(null);
  const { toast } = useToast();

  const handleSymptomInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSymptoms(e.target.value);
  };

  const toggleRecording = () => {
    // In a real app, this would connect to the browser's Speech Recognition API
    setIsRecording(!isRecording);
    
    if (!isRecording) {
      toast({
        title: "Recording started",
        description: "Please describe your symptoms clearly",
      });
      
      // Simulate recording and speech-to-text
      setTimeout(() => {
        setIsRecording(false);
        setSymptoms("I have a headache, fever around 100°F, and body aches for the past 2 days. I also feel tired and have a sore throat.");
        toast({
          title: "Recording finished",
          description: "Your symptoms have been transcribed",
        });
      }, 3000);
    } else {
      toast({
        title: "Recording stopped",
        description: "Transcription in progress",
      });
    }
  };

  const generateDiagnosis = async () => {
    if (!symptoms.trim()) {
      toast({
        title: "Error",
        description: "Please describe your symptoms first",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI processing delay
    setTimeout(() => {
      // Mock diagnosis result - in a real app, this would come from an AI model
      const result: DiagnosisResult = {
        diagnosis: "Common Cold / Mild Flu",
        confidence: 0.89,
        prescription: "- Acetaminophen (Tylenol) 500mg: Take 1 tablet every 6 hours for fever and pain\n- Guaifenesin (Mucinex) 600mg: Take 1 tablet every 12 hours for congestion\n- Dextromethorphan (Robitussin) 10mg: Take as needed for cough",
        recommendations: [
          "Rest for 2-3 days",
          "Drink plenty of fluids",
          "Use a humidifier if available",
          "If symptoms worsen or persist beyond 5 days, consult a physician"
        ]
      };
      
      setDiagnosisResult(result);
      setIsGenerating(false);
      
      toast({
        title: "Diagnosis Complete",
        description: "AI has analyzed your symptoms",
      });
    }, 2500);
  };

  const resetDiagnosis = () => {
    setDiagnosisResult(null);
    setSymptoms('');
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="bg-gradient-to-r from-healthcare-primary/10 to-healthcare-secondary/10">
        <CardTitle className="text-healthcare-primary text-2xl flex items-center gap-2">
          <FileText className="h-6 w-6" /> 
          AI Diagnosis Assistant
        </CardTitle>
        <CardDescription>
          Describe your symptoms to receive an automated diagnosis and prescription
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {diagnosisResult ? (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Preliminary Diagnosis:</h3>
              <div className="flex items-center">
                <div className="text-xl font-semibold text-healthcare-primary">{diagnosisResult.diagnosis}</div>
                <div className="ml-3 px-2 py-1 bg-healthcare-primary/10 text-healthcare-primary rounded text-xs">
                  {Math.round(diagnosisResult.confidence * 100)}% confidence
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Recommended Medication:</h3>
              <div className="bg-gray-50 p-3 rounded-md font-mono text-sm whitespace-pre-line">
                {diagnosisResult.prescription}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                *This is a suggested prescription only. Please consult with a healthcare provider.
              </p>
            </div>
            
            <Alert className="bg-healthcare-secondary/10 border-healthcare-secondary">
              <AlertTitle className="text-healthcare-secondary-dark">Recommendations</AlertTitle>
              <AlertDescription>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  {diagnosisResult.recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
            
            <div className="text-sm text-gray-500 bg-yellow-50 p-3 rounded-md border border-yellow-200">
              <strong>Important:</strong> This diagnosis is generated by an AI system and should not replace 
              professional medical advice. If you're experiencing severe symptoms or are unsure about your condition, 
              please consult with a qualified healthcare professional immediately.
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="symptoms" className="text-sm font-medium">
                Please describe your symptoms in detail:
              </label>
              <div className="flex gap-2">
                <Textarea
                  id="symptoms"
                  placeholder="Example: I've had a headache and fever for the past 2 days..."
                  className="min-h-[120px]"
                  value={symptoms}
                  onChange={handleSymptomInput}
                />
                <Button
                  variant="outline"
                  size="icon"
                  className={`flex-shrink-0 ${isRecording ? 'bg-red-50 text-red-500 border-red-200 animate-pulse' : ''}`}
                  onClick={toggleRecording}
                >
                  <Mic className="h-4 w-4" />
                </Button>
              </div>
              {isRecording && (
                <p className="text-xs text-red-500 animate-pulse">
                  Recording... Speak clearly about your symptoms
                </p>
              )}
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-1">Additional details that help with diagnosis:</h3>
              <ul className="list-disc text-xs text-gray-500 pl-5 space-y-1">
                <li>When did your symptoms begin?</li>
                <li>Do you have any known allergies or pre-existing conditions?</li>
                <li>Have you taken any medication already?</li>
                <li>Have you had any similar symptoms in the past?</li>
              </ul>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end gap-3 border-t p-4 bg-gray-50">
        {diagnosisResult ? (
          <Button variant="outline" onClick={resetDiagnosis}>
            New Diagnosis
          </Button>
        ) : (
          <Button 
            onClick={generateDiagnosis} 
            disabled={!symptoms.trim() || isGenerating}
            className="bg-healthcare-primary hover:bg-healthcare-primary-dark"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                Analyzing Symptoms...
              </>
            ) : (
              'Generate Diagnosis'
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default AIDiagnosis;
