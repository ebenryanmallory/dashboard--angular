export interface TaskDialogData {
    task: Partial<Task>;
    enableDelete: boolean;
  }
  
  export interface TaskDialogResult {
    task: Task;
    delete?: boolean;
  }