import prisma from "@/app/lib/db";
import Image from "next/image";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";
import { Divide } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CatInterface } from "@/app/components$/CatInterface";
import { NewRelationshipSubmit } from "@/app/components$/SubmitButtons";
import { CreateRelationship } from "@/app/actions";

// This cat page route handles initial data fetching for the cat based on params
{
  /* EVENTUAL FIXES :

      -  handle logged out users interacting with map
      - Submit buttons should dynamically take cat id from props
*/
}

async function getCat(catId: string) {
  const cat = await prisma.cat.findUnique({
    where: {
      id: catId,
    },
  });

  return cat;
}

// retrieve relationship from db
async function getRelationship({
  userId,
  catId,
}: {
  userId: string;
  catId: string;
}) {
  const relationships = await prisma.relationship.findFirst({
    where: {
      AND: [{ userId: userId }, { catId: catId }],
    },
  });

  return relationships;
}

// How do we start a new relationship with the user and cat?
// use create relationship

export default function CatRoute({ params }: { params: { id: string } }) {
  return <ShowInterface params={params} />;
}

// show interface displays the interactive game interface
async function ShowInterface({ params }: { params: { id: string } }) {
  const { getUser } = getKindeServerSession();
  const user = (await getUser()) as any;
  const cat = (await getCat(params.id)) as any;
  const relationship = await getRelationship({
    userId: user.id as string,
    catId: cat.id as string,
  });
  console.log(cat);
  if (relationship === null) {
    return (
      <div className="w-full grid place-self-center">
        <Dialog>
          <DialogTrigger className="flex flex-col place-self-center justify-center align-center">
            <img
              src={cat?.pic}
              alt="Image of the cat"
              fill
              height={200}
              width={200}
            />
            Get to know {cat?.name}?
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-4">
                A little about {cat?.name}
              </DialogTitle>
              <DialogDescription>
                {/* UltimatelyThis will be cat based */}
                <div className="flex flex-col gap-2">
                  <p>
                    {cat?.name}'s favorite activity is {cat?.favoriteActivity}
                  </p>
                  <p>
                    {cat?.name}'s favorite treat is {cat?.favoriteTreat}
                  </p>
                  <p>{cat?.originStory}</p>
                  <form action={CreateRelationship}>
                    <input type="hidden" name="userId" value={user?.id} />
                    <input type="hidden" name="catId" value={cat?.id} />

                    <NewRelationshipSubmit catName={cat.name} />
                  </form>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    );
  } else {
    {
      /* Imported Interface component that will take all the data props */
      <CatInterface
        relationshipId={relationship?.id}
        catId={cat?.id}
        userId={user?.id}
        imagePath={cat?.pic}
        pathName="/"
      />;
    }
  }

  return (
    <div>
      <h1>Hello {user?.given_name}</h1>
      <p>User Id: {user?.id}</p>
      <h3>What would you like to do with {cat?.name}</h3>
      <p>Relationship id: {relationship?.id}</p>
      <div>
        <p>today's log</p>
        <p>available treats</p>
      </div>

      <div>
        <Button>Play</Button>
        <Button>Treat</Button>
      </div>
    </div>
  );
}
