import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useBreakpointValue,
  useSteps,
} from '@chakra-ui/react';

interface PetAdoptionStepperProps {
  activeStep: number;
}

const steps = [
  { title: 'Questionnaire', description: 'Tell us about yourself!' },
  {
    title: 'Application is submitted',
    description: 'We are reviewing your application!',
  },
  { title: 'Result', description: 'Your application has a result!' },
];

export const PetAdoptionStepper: React.FC<PetAdoptionStepperProps> = ({
  activeStep,
}) => {
  const { activeStep: currentStep } = useSteps({
    index: activeStep,
    count: steps.length,
  });

  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <>
      <Stepper
        p='10'
        size='lg'
        index={currentStep}
        orientation={isMobile ? 'vertical' : 'horizontal'}
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink='0'>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </>
  );
};
