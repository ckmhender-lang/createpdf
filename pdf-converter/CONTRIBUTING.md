# Contributing to PDF Converter Pro

Thank you for your interest in contributing to PDF Converter Pro! We welcome contributions from the community.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/pdf-converter.git`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Install dependencies: `npm install`
5. Start the development server: `npm start`

## Development Guidelines

### Code Style

- Use TypeScript for all new files
- Follow the existing code structure and naming conventions
- Use functional components with hooks
- Keep components small and focused on a single responsibility
- Use meaningful variable and function names

### Component Structure

```typescript
// Good component structure
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Spacing } from '../constants/colors';

interface MyComponentProps {
  title: string;
  onPress: () => void;
}

export const MyComponent: React.FC<MyComponentProps> = ({ title, onPress }) => {
  // Component logic here
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Spacing.md,
  },
  title: {
    fontSize: 16,
    color: Colors.text,
  },
});
```

### Testing

- Test your changes on both iOS and Android (if possible)
- Ensure the app builds without errors
- Test edge cases and error scenarios
- Verify that existing features still work

### Commit Messages

Use clear and descriptive commit messages:

```
feat: Add PDF compression feature
fix: Resolve image picker crash on Android
docs: Update README with new installation steps
style: Format code according to style guide
refactor: Simplify PDF generation logic
```

## Pull Request Process

1. Update the README.md with details of changes if applicable
2. Update the documentation for any new features
3. Make sure your code follows the project's code style
4. Test your changes thoroughly
5. Create a pull request with a clear title and description
6. Link any related issues in the PR description

## Pull Request Checklist

- [ ] Code follows the project's style guidelines
- [ ] All tests pass
- [ ] New features include appropriate documentation
- [ ] Commit messages are clear and descriptive
- [ ] PR description clearly describes the changes
- [ ] Screenshots included for UI changes (if applicable)

## Feature Requests

We welcome feature requests! Please:

1. Check if the feature has already been requested
2. Open a new issue with the "enhancement" label
3. Clearly describe the feature and its benefits
4. Include mockups or examples if applicable

## Bug Reports

When reporting bugs, please include:

1. Device and OS version
2. App version
3. Steps to reproduce the bug
4. Expected behavior
5. Actual behavior
6. Screenshots or screen recordings (if applicable)
7. Error messages or logs

## Code of Conduct

### Our Standards

- Be respectful and inclusive
- Welcome newcomers and help them get started
- Focus on constructive feedback
- Accept criticism gracefully
- Show empathy towards other community members

### Unacceptable Behavior

- Harassment or discriminatory language
- Trolling or insulting comments
- Personal or political attacks
- Publishing others' private information
- Other unprofessional conduct

## Questions?

Feel free to open an issue with the "question" label if you need help or have questions about contributing.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

Thank you for contributing to PDF Converter Pro! 🎉
