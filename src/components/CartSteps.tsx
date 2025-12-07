const steps = [
  {
    id: 1,
    title: "Shopping Cart",
  },
  {
    id: 2,
    title: "Shipping Details",
  },
  {
    id: 3,
    title: "Payment Method",
  },
];

export default function CartSteps({ activeStep }: { activeStep: number }) {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center justify-between gap-16">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-center justify-center gap-4 border-b-2 pb-4 w-full md:w-1/3 ${
              activeStep === step.id ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full text-lg font-medium ${
                activeStep === step.id
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {step.id}
            </div>
            <p
              className={`text-sm ${
                activeStep === step.id
                  ? "text-gray-800 font-medium"
                  : "text-gray-500"
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
