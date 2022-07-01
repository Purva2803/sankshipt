import { Layout } from "components/Layout";
import { PageHeading } from "components/PageHeading";
import { NextPage } from "next";
import * as Styles from "styles/pages/stories";

const Stories: NextPage = ({}) => {
    return (
        <Layout>
            <PageHeading heading="Stories" />
            <Styles.Wrapper></Styles.Wrapper>
        </Layout>
    );
};

export default Stories;
