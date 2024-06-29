import FeedbacksSlider from "@/components/feedback-slider";

const Feedbacks = () => {
  return (
    <div className="bg-lightblue">
      <div className="container py-8 flex flex-col gap-y-8">
        <h1 className="text-center font-roboto text-3xl font-semibold">
          Mijozlarimizdan <span className="text-darkblue">fikr-mulohazalar</span>
        </h1>
        <FeedbacksSlider />
      </div>
    </div>
  );
};

export default Feedbacks;
