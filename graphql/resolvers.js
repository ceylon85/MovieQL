const Lee = {
    name: "SeungJun",
    age: 33,
    gender: "male"

};

const resolvers = {
     Query: {
         person: () => Lee
     }
 };

 export default resolvers;