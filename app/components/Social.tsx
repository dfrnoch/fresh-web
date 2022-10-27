import Image from "next/image";

export const Social = ({ url, icon }: { url: string; icon: string }) => {
  return (
    <a className={`w-6 mr-7 flex items(center)`} href={url}>
      <Image src={icon} alt={url} width={40} height={40} />
    </a>
  );
};
