const objectCaching = () => {
  // BEFORE
  function slowSuccessResponse() {
    return JSON.stringify({ success: true });
  }

  // AFTER
  const response = { success: true };

  function fastSuccessResponse() {
    return JSON.stringify(response);
  }
}