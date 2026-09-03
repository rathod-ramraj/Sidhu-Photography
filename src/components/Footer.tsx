import { GENERAL_INFO } from '@/lib/data';

const Footer = () => {

    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a vision or celebration to capture?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="">
                    <p className="leading-none text-muted-foreground">
                        © {new Date().getFullYear()} Sidhu Photography. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
