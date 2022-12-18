export const parseUsernameInArgs = () => {
  const args = process.argv.slice(2);
  if (args.length === 0) return 'Anonymous'
  if (args[0].includes('--username')) {
    return (args[0].slice(11))
  }
};