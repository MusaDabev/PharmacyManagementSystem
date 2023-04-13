import React, { useState } from 'react';

export const InvoiceContext = React.createContext();

const InvoiceBtnContextProvider = (props) => {
    const [showButton, setShowButton] = useState(false);

    const toggleShowButton = () => {
      setShowButton(!showButton);
    };

    const showInvoiceButton = showButton;

    return (
        <InvoiceContext.Provider value={{ showInvoiceButton, toggleShowButton }}>
          {props.children}
        </InvoiceContext.Provider>
      );
}

export default InvoiceBtnContextProvider;