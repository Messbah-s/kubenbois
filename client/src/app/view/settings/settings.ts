import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {ThemeService} from '../../service/theme.service';

@Component({
  selector: 'app-settings',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings {
  theme: FormControl<string> = new FormControl();

  constructor(
    private themeService: ThemeService,
  ) {}

  ngOnInit() {
    let savedTheme: string | null = localStorage.getItem('theme');
    savedTheme
      ? this.theme.setValue(savedTheme, { emitEvent: false })
      : this.theme.setValue('night', { emitEvent: false });
    this.theme.valueChanges.subscribe((value) => {
      localStorage.setItem('theme', value!);
      this.changeTheme(this.theme.value!);
    });
  }

  changeTheme(theme: string): void {
    this.themeService.updateTheme(theme)
  }
}
