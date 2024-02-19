const students = [
  { name: "Bob", enrol: true },
  { name: "Marry", enrol: false },
  { name: "Lily", enrol: false },
];

module.exports = {
  getAll: function () {
    return students;
  },
};
