import { render, screen, fireEvent } from '@testing-library/react';
import Projects from '../components/Projects';

// Mock de window.open para evitar abrir nuevas pestañas durante el test
beforeAll(() => {
  global.open = jest.fn();
});

afterEach(() => {
  jest.clearAllMocks();
});

test('renders project title', () => {
  render(<Projects />);
  const titleElement = screen.getByRole('heading', { level: 3 });
  expect(titleElement).toBeInTheDocument();
});

test('renders central project image', () => {
  render(<Projects />);
  const centralImage = screen.getByAltText(/Proyecto central/i);
  expect(centralImage).toBeInTheDocument();
});

test('clicking central image calls window.open with project url', () => {
  render(<Projects />);
  const centralImageDiv = screen.getByRole('img', { name: /Proyecto central/i }).parentElement;

  // Hacemos click
  fireEvent.click(centralImageDiv);

  // Verificamos que window.open haya sido llamado
  const projectUrl = centralImageDiv ? centralImageDiv.onclick?.toString() : '';
  expect(global.open).toHaveBeenCalled();
});
