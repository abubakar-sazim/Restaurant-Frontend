import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="text-center mt-8">
      <h1 className="text-3xl font-bold mb-4">DishDive</h1>
      <p className="text-lg mb-8">
        An AI-powered restaurant finder tailored to your needs.
      </p>
      <Input className="mb-4" />
      <Button variant="outline">Button</Button>
    </div>
  );
};

export default HomePage;
