export default function ArticleContent({ content }) {
  return (
    <div className="prose-content mb-12 text-white">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
