import React from 'react';
import '../skeleton/skeleton.css'
type Props = {
  classes: string,
}

const Skeleton = (props: Props) => {
  const { classes } = props;
  console.log(classes);
  return (
    <div >
      <div className={`skeleton ${classes} `}>
        
      </div>
    </div>
  );
}

export default Skeleton;
