import Markdoc from "@markdoc/markdoc";
import React, { FC } from "react";
import { Citation } from "../../features/chat/chat-ui/markdown/citation";
import { CodeBlock } from "./code-block";
import { citationConfig } from "./config";
import { Paragraph } from "./paragraph";
import './markdown.css'

interface Props {
  content: string;
  pulse?: boolean;
}

export const Markdown: FC<Props> = (props) => {
  const ast = Markdoc.parse(props.content);

  const content = Markdoc.transform(ast, {
    ...citationConfig,
  });

  return (<div className={props.pulse ? "pulse-circle" : ""}>
   { Markdoc.renderers.react(content, React, {
      components: { Citation, Paragraph, CodeBlock },
    })}
  </div>)
};
