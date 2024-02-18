import { Arrow } from '@components/shared/Icons/Arrow';
import { useOutsideClick } from '@src/hook/useOutsideClick';
import { Panel } from '@ui/Panel';
import { Typography } from '@ui/Typography';
import { useRef, useState } from 'react';
import cn from 'classnames';

export const QuestionCart = ({ description, title, full = false }: { description: string; title: string, full?: boolean }) => {
  const [isActive, setActive] = useState(false);
  const descRef = useRef<HTMLDivElement>(null);

  const ref = useOutsideClick(() => {
    setActive(false);
  });

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <div ref={ref} style={{height: 'fit-content'}}>
      <Panel onClick={handleClick} type='small' className={cn('questionCart', { active: isActive })}>
        <div className="questionCart-header">
          <Typography style={{maxWidth: full ? '990px' : 'auto'}} component="p" type="body" variant="mega" color="black">
            {title}
          </Typography>
          <Arrow type="bottom" />
        </div>
        <div style={{ height: isActive ? descRef.current?.clientHeight : 0 }} className="questionCart-description">
          <div ref={descRef}>
            <div className="questionCart-text typography color-black body medium" dangerouslySetInnerHTML={{ __html: description }}></div>
          </div>
        </div>
      </Panel>
    </div>
  );
};
