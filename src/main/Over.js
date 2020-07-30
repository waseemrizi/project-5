import React, { useState, useRef } from 'react'
import { Overlay, Popover, Button } from 'react-bootstrap';
function Over() {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
  
    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    };
  
    return (
      <div ref={ref}>
        <Button variant="success"  onClick={handleClick}>Holy guacamole!</Button>
  
        <Overlay
          show={show}
          target={target}
          placement="bottom"
          container={ref.current}
          containerPadding={20}
        >
          <Popover id="popover-contained">
            <Popover.Title as="h3">MS IT</Popover.Title>
            <Popover.Content>
              <strong>Thory Work!</strong> Check this info.
            </Popover.Content>
          </Popover>
        </Overlay>
      </div>
    );
  }
  
  export default Over;
  