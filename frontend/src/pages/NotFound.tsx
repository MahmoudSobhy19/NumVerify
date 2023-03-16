import { Button } from "../components/Button";

export const NotFound: React.FC = () => {
  return (
    <div className="container mx-auto flex justify-center items-center flex-col gap-8 mt-20">
      <h3 className="text-6xl">Permission Denied</h3>
      <a href="/">
        <Button>Home</Button>
      </a>
    </div>
  );
};
