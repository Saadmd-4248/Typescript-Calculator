function appendValue(value: string): void {
    const result = document.getElementById('result') as HTMLInputElement;
    if (result) {
      result.value += value;
    }
  }
  
  function clearResult(): void {
    const result = document.getElementById('result') as HTMLInputElement;
    if (result) {
      result.value = '';
    }
  }
  
  function deleteValue(): void {
    const result = document.getElementById('result') as HTMLInputElement;
    if (result) {
      result.value = result.value.slice(0, -1);
    }
  }
  
  function calculateResult(): void {
    const result = document.getElementById('result') as HTMLInputElement;
    if (result) {
      try {
        result.value = eval(result.value);
      } catch {
        result.value = 'Math Error';
      }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    





    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}
  