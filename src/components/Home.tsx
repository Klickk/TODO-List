import { Button } from "@mui/material";
import "../assets/awsbtn.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="h-full w-full overflow-auto flex flex-col items-center justify-center grow bg-gray-100">
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
      <Link to="/todo">
        <Button variant="contained" color="error" size="large" className="">
          TO DO List
        </Button>
      </Link>
    </div>
  );
};
