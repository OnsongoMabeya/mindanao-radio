export default function Section({ id, title, children, className = '' }) {
    return (
        <section id={id} className={`py-16 md:py-24 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-8 text-center">
                {title}
            </h2>
            )}
            <div className="text-dark-text-secondary">
            {children}
            </div>
        </div>
        </section>
    );
} 