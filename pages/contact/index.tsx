import ContactForm from "@/components/contacts/contact-form";
import Head from "next/head";
import { Fragment } from "react";

const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>jats contact</title>
        <meta name="description" content="new nxex" />
      </Head>
      <ContactForm />
    </Fragment>
  );
};

export default ContactPage;
