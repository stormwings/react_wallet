import React, { FunctionComponent } from 'react';
import './SpanList.scss';

interface IPropsContainer {
  content: string;
  className?: string;
  contentSecondary?: string;
  onClickContentSecondary?: Function;
}
const SpanList: FunctionComponent<IPropsContainer> = props => {
  const { className, content, contentSecondary, onClickContentSecondary } = props;
  const componentClass = `${className ? className : ''}`;

  return (
    <div id="span-list--container" className={componentClass}>
      <SpanElement content={content} />

      {contentSecondary && !onClickContentSecondary && <SpanElement content={contentSecondary} />}

      {contentSecondary && onClickContentSecondary && <SpanElementUrl content={contentSecondary} onClick={onClickContentSecondary} />}
    </div>
  );
};

export default SpanList;

interface IPropsElement {
  content: string;
}
export const SpanElement: FunctionComponent<IPropsElement> = props => {
  const { content } = props;
  return <div className="span-list--content">{content}</div>;
};

interface IPropsElementUrl {
  content: string;
  onClick: Function;
}
export const SpanElementUrl: FunctionComponent<IPropsElementUrl> = props => {
  const { content, onClick } = props;

  const defaultProps = {
    onClick: () => console.log('onClick empty')
  };

  return (
    <div className="span-list--content--url" onClick={() => (onClick ? onClick() : defaultProps.onClick())}>
      {content}
    </div>
  );
};
