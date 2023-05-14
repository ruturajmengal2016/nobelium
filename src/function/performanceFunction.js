export const totalAttendance = (user) => {
  const regxAttendance = new RegExp("Attendance", "gi");
  return Object.keys(user)
    .filter((ele) => {
      return regxAttendance.test(ele);
    })
    .map((ele) => {
      return user[ele];
    })
    .reduce((acc, curr) => acc + curr, 0);
};
export const totalCodeZinger = (user) => {
  const regxCodezinger = new RegExp("CodeZinger", "gi");
  return Object.keys(user)
    .filter((ele) => {
      return regxCodezinger.test(ele);
    })
    .map((ele) => {
      return user[ele];
    })
    .reduce((acc, curr) => acc + curr, 0);
};

export const totalAssignment = (user) => {
  const regxAssignment = new RegExp("Submission", "gi");
  return Object.keys(user)
    .filter((ele) => {
      return regxAssignment.test(ele);
    })
    .map((ele) => {
      return user[ele];
    })
    .reduce((acc, curr) => acc + curr, 0);
};
