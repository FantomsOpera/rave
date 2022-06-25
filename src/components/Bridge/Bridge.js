import React, { useEffect } from 'react';
import useScript from '../../helpers/useScript.js';
import logo from '../../RaveBase.png';
import './App.css';
import { useNavigate } from 'react-router-dom';


function Bridge() {
  useScript('https://transferto.xyz/widget.js');

  useEffect(() => {
    window.lifi = window.lifi || function () { (window.lifi.q = window.lifi.q || []).push(arguments) }; window.lifi.l = +new Date();
    window.lifi('init', { mode: 'inline', options: { fromChain: 'eth', toChain: 'ftm' } });
  }, []);

  return (
    <iframe src="https://transferto.xyz/embed?fromChain=eth&amp;toChain=ftm" scrolling="auto" frameborder="0" allowtransparency="true" title="Li.Fi Widget" width="100%" height="100%" className="lifi__widget-iframe"></iframe>
  );
}

const WrappedBridge = props => {
  const history = useNavigate()

  return <Bridge history={history} {...props} />
}

export default WrappedBridge;
