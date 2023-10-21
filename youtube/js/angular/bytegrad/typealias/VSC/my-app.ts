// interface
interface IUserProps {
    name: string;
    age: number;
}

// type
type TUserProps = {
    name: string;
    age: number;
}

// type extending
type TAdminProps = TUserProps & {
    role: string;
}

// type alias can describe objects, like interfaces,
// but go far beyond as with describing primitive types.
type Address =  string;
const address: Address = "123 Main St.";

// type alias can describe unions.
type UserNames = string | string[];
const currentUserName: UserNames = "Joe Santos";
const otherUsers : UserNames = ["Bood Crisp", "Foggy Toppen"];

// type alias can describe utilities.
type MemberProps = {
    name: string;
    age: number;
    memberSince: Date;
}
type GuestProps = Omit<MemberProps, "memberSince" | "age">;

// type alias can describe tuples.
type UserAddressById = [number, string];
const joesantiniLivesAt = [1, "1313 Mockingbird Ln"];

// type alias can extract from something else.
const project = {
    name: "Project 1",
    specifications: {
        areaSize: 100,
        rooms: 3
    }
} // as const
type Specifications = typeof project["specifications"];

// interfaces are (too) open-ended. unstable.
interface Pet {
    name: string,
    animalType: string,
}
interface Pet {
    hasHome: boolean;
}

let betty : Pet = {
    name: "betty",
    animalType: "cat",
    hasHome: true
}

// type aliases work with classes as well. 
type TEmployee = {
    name: string,
    id: number,
}

class Employee implements TEmployee {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}