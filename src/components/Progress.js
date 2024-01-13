import React from "react";

export default function Progress({ index, numQestions, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
        {/* the progress bar by default does not update as soon as you click the answer*/}
        {/* This logic helps us to update the progress bar as soon as the answer is clicked */}
        <progress max={numQestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQestions}
      </p>
      <p><strong>{points}</strong> / {maxPossiblePoints}</p>
    </header>
  );
}
