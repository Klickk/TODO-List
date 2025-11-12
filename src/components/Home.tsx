import { Button } from "@mui/material";
import "../assets/awsbtn.css";

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl flex mx-10 mt-10 mb-5 font-semibold text-gray-800">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        dignissim, nisi quis pulvinar ullamcorper, nunc nisi aliquam enim, ut
        tempus leo lectus sit amet lorem. Phasellus nec quam blandit ante semper
        gravida vel non sem. Ut rhoncus enim at tellus fringilla, sit amet
        semper lacus sollicitudin. Mauris ut odio non arcu venenatis convallis.
        Quisque sagittis semper magna, eget consequat arcu dapibus ac. Etiam ac
        egestas lorem. Ut tincidunt odio vitae facilisis accumsan. Donec
        dignissim scelerisque nisl eu consequat.{" "}
      </h2>
      <Button
        variant="contained"
        color="error"
        href="/todo"
        size="large"
        className=""
      >
        TO DO List
      </Button>
    </div>
  );
};
