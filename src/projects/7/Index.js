import React from 'react';

const Index = () => {
  const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];
  console.log("people : ", people);
  console.group("Question 1. is at least one person 19 or older?")
  const isOlderNineteen = people.some(v => new Date().getFullYear()-v.year >= 19 ) ? "YES" : "NO";
  console.log("Answer. ", isOlderNineteen);
  console.groupEnd();

  console.group("Question 2. is everyone 19 or older?");
  const isEveryoneOlderNineteen = people.every(v => new Date().getFullYear()-v.year >= 19 ) ? "YES" : "NO";
  console.log("Answer. " , isEveryoneOlderNineteen);
  console.groupEnd();

  console.log("comments : ", comments);
  console.group("Find is like filter, but instead returns just the one you are looking for find the comment with the ID of 823423");
  const getCommentById = comments.find(v => v.id === 823423);
  console.log("Answer : ", getCommentById);
  console.groupEnd();
  console.group("Find the comment with this ID && delete the comment with the ID of 123523");
  const getIndexOfCommentById = comments.findIndex(v => v.id === 123523);
  console.log("Answer. ", comments[getIndexOfCommentById]);
  comments.splice(getIndexOfCommentById, 1);
  console.log("Answer. ", comments);
  console.groupEnd();

  return (
    <div>
      <h1>please open console</h1>
      <div className="mdn-list">
        <a
          style={{ display: "block" }}
          href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some"
        >
          some MDN
        </a>
        <a
          style={{ display: "block" }}
          href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every"
        >
          every MDN
        </a>
        <a
          style={{ display: "block" }}
          href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find"
        >
          find MDN
        </a>
        <a
          style={{ display: "block" }}
          href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex"
        >
          findIndex MDN
        </a>
      </div>
    </div>
  );
}

export default Index;