import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

const AssignRole = () => {
  const { user } = useUser();

  useEffect(() => {
    if (user && user.publicMetadata.role !== user.customAttributes.role) {
      user.update({
        publicMetadata: { role: user.customAttributes.role },
      });
    }
  }, [user]);

  return null;
};

export default AssignRole;