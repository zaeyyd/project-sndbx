import React from "react";

const NewPost: React.FC = () => {

  return (
    <div className="backdrop-brightness-95 rounded-xl p-10">
      <form >
        <h1 className="text-9xl text-green-100"> username </h1>

        <input type="text" className="w-fill bg-transparent border border-green-100 rounded-lg focus:outline-none p-5 caret-green-100 text-green-100" />

        <h1 className="text-9xl text-green-100"> password </h1>

        <input type="text" className="w-fill bg-transparent border border-green-100 rounded-lg focus:outline-none p-5 caret-green-100 text-green-100" />
      </form>

      <p> or with google</p>
    </div>
  );
};

export default NewPost;
