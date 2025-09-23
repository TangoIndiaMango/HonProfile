interface ArticleSection {
  id: string;
  title: string;
  content: string;
  subsections?: {
    id: string;
    title: string;
    content: string;
  }[];
}

interface SingleArticleContentProps {
  content: ArticleSection[];
}

// Utility function to convert markdown-style formatting to HTML
function parseMarkdownToHtml(text: string): string {
  return text
    // Convert **bold** to <strong>bold</strong>
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Convert *italic* to <em>italic</em>
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Convert `code` to <code>code</code>
    .replace(/`(.*?)`/g, '<code>$1</code>')
    // Convert line breaks to <br>
    .replace(/\n/g, '<br>');
}

export function SingleArticleContent({ content }: SingleArticleContentProps) {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="prose prose-lg prose-gray max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-strong:font-semibold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700">
              {content.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                    {section.title}
                  </h2>
                  
                  <div 
                    className="text-gray-700 leading-relaxed mb-8"
                    dangerouslySetInnerHTML={{ __html: parseMarkdownToHtml(section.content) }}
                  />

                  {/* Subsections */}
                  {section.subsections && (
                    <div className="space-y-8">
                      {section.subsections.map((subsection) => (
                        <div key={subsection.id} id={subsection.id} className="scroll-mt-24">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            {subsection.title}
                          </h3>
                          <div 
                            className="text-gray-700 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: parseMarkdownToHtml(subsection.content) }}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - Desktop Only */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {content.map((section) => (
                    <div key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="block text-sm text-gray-600 hover:text-gray-900 transition-colors py-1 scroll-smooth"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(section.id)?.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                          });
                        }}
                      >
                        {section.title}
                      </a>
                      {section.subsections && (
                        <div className="ml-4 space-y-1">
                          {section.subsections.map((subsection) => (
                            <a
                              key={subsection.id}
                              href={`#${subsection.id}`}
                              className="block text-xs text-gray-500 hover:text-gray-700 transition-colors py-1 scroll-smooth"
                              onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(subsection.id)?.scrollIntoView({ 
                                  behavior: 'smooth',
                                  block: 'start'
                                });
                              }}
                            >
                              {subsection.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
