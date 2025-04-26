import Image from "next/image";

export default function ArticleAuthor({ author }) {
  return (
    <div className="border-t border-base-300 pt-8 mt-8">
      <div className="flex items-start">
        <div className="avatar mr-4">
          <div className="w-16 h-16 rounded-full">
            <Image
              src={author.image || "/placeholder.svg"}
              alt={author.name}
              width={64}
              height={64}
            />
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-white">About {author.name}</h3>
          <p className="text-base-content/70 text-sm mt-1">{author.bio}</p>
        </div>
      </div>
    </div>
  );
}
