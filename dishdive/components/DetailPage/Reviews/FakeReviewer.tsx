import { generateFakename } from "@/utils/textHelpers";
import Avatar from "react-avatar";

const FakeReviewers = () => {
  return (
    <div className="flex items-center mb-2 mt-3">
      <Avatar name={generateFakename()} size="25" round />
      <h1 className="ml-3 font-medium">{generateFakename()}</h1>
    </div>
  );
};

export default FakeReviewers;
