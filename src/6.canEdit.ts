type Role = "admin" | "editor" | "viewer";

const canEdit = (role: Role): boolean => {
  //   if (role === "admin" || role === "editor") {
  //     return true;
  //   }
  //   return false;
  return role === "admin" || role === "editor";
};

console.log(canEdit("editor"));
