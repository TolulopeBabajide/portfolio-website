import { useEffect } from 'react';

const SEO = ({ title, description, schema }) => {
    useEffect(() => {
        // Update Title
        if (title) {
            document.title = title;
        }

        // Update Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (description) {
            if (!metaDescription) {
                metaDescription = document.createElement('meta');
                metaDescription.name = 'description';
                document.head.appendChild(metaDescription);
            }
            metaDescription.setAttribute('content', description);
        }

        // Update Structured Data (JSON-LD)
        const existingScript = document.getElementById('json-ld');
        if (existingScript) {
            existingScript.remove();
        }

        if (schema) {
            const script = document.createElement('script');
            script.id = 'json-ld';
            script.type = 'application/ld+json';
            script.innerHTML = JSON.stringify(schema);
            document.head.appendChild(script);
        }

        // Cleanup on unmount (optional, but good practice for SPAs)
        return () => {
            // Optional: reset title/desc on unmount if needed
        };
    }, [title, description, schema]);

    return null;
};

export default SEO;
