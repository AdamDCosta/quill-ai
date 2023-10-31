import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

type PageProps = {
  params: {
    fileid: string;
  };
};

export default function Page({ params }: PageProps) {
  const { fileid } = params;

  const { getUser } = getKindeServerSession();
  const user = getUser();


  return <div>{fileid}</div>;
}
