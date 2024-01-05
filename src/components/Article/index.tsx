import Link from "next/link";
import * as Styled from "./styles";
import { IArticlePreview } from "types/IArticlePreview";

export const Article = ({
    category,
    title,
    date,
    slug,
    description,
}: IArticlePreview) => {
    return (
        <Link href={`/articles/${slug}`}>
            <Styled.ArticleContainer>
                <Styled.ArticleTitle>{title}</Styled.ArticleTitle>
                <Styled.ArticleDescription>
                    {description}
                </Styled.ArticleDescription>
                <Styled.RowContainer>
                    <time>{date}</time>
                    <p>·</p>
                    <p>{category}</p>
                </Styled.RowContainer>
            </Styled.ArticleContainer>
        </Link>
    );
};
