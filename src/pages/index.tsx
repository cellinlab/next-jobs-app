import { Button } from "@/components/button";
import { InputField } from "@/components/form";
import { Link } from "@/components/link";

const LandingPage = () => {
  return (
    <>
      <Button>Click me</Button>
      <br />
      <InputField label="name" />
      <br />
      <Link href="/">Home</Link>
    </>
  );
};

export default LandingPage;
