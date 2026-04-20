import { FaUserCircle } from "react-icons/fa";

interface peopleToFollowInfo {
  name: string;
  following: boolean;
}

interface UserCardProp {
  person: peopleToFollowInfo;
}

const UserCard = ({ person }: UserCardProp) => {
  return (
    <div className="flex items-center justify-between">
      <section className="flex items-center">
        <FaUserCircle className="text-3xl mr-3 text-gray-500" />
        <span>{person.name}</span>
      </section>
      <button>{person.following ? "Following" : "Follow"}</button>
    </div>
  );
};

export default UserCard;
