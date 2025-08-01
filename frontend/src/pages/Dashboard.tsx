import { useEffect, useState } from "react";
import axios from "axios";
import type { User } from "../types";
import Card from "../components/Card";
import { BadgeCheck, Gift, IndianRupee } from "lucide-react";
import { get_user_details } from "../apis";

export default function Dashboard() {
  const [user, setUser] = useState<User>({
    name: "",
    referralCode: "",
    donations: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await get_user_details();
      setUser(data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title="Referral Code"
          value={user.referralCode || "N/A"}
          icon={<BadgeCheck size={28} />}
        />
        <Card
          title="Total Donations"
          value={`₹${user.donations}`}
          icon={<IndianRupee size={28} />}
        />
        <Card
          title="Rewards"
          value={["T-shirt", "Badge", "Certificate"]}
          isList={true}
          icon={<Gift size={28} />}
        />
      </div>
    </div>
  );
}
