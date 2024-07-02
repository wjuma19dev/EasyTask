import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../tasks.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Input({ required: true }) userId!: string;

  // REVIEW: inject
  private taskService = inject(TaskService);

  enteredTitle = '';
  enteredSummary = '';
  enteredTimestamp = '';

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.save({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      timestamp: this.enteredTimestamp,
      id: new Date().getTime().toString(),
      userId: this.userId,
    });
    this.close.emit();
  }
}
