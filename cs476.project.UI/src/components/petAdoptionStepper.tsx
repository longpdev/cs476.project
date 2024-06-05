import {
  Box,
  Heading,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";

interface PetAdoptionStep1Props {
  activeStep: number;
}

const steps = [
  { title: "First", description: "Tell Us About Yourself" },
  { title: "Second", description: "Contact Info" },
  { title: "Third", description: "Request Pending" },
  { title: "Fourth", description: "Request Approved" },
];

export const PetAdoptionStep1: React.FC<PetAdoptionStep1Props> = ({
  activeStep,
}) => {
  const { activeStep: currentStep } = useSteps({
    index: activeStep,
    count: steps.length,
  });

  return (
    <>
      <Heading py="20" textAlign={"center"}>
        Tell Us About Yourself
      </Heading>
      <Stepper px="10" size="lg" index={currentStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
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
