import notify from "./notify";

let messageInstance;
function getMessageInstance() {
  messageInstance = messageInstance || notify.newInstance();
  return messageInstance;
}

function notice({ duration = 1.5, content = "" }) {
  const instance = getMessageInstance();
  instance.add({
    duration: duration,
    content: content
  });
}

export default {
  info(option) {
    return notice(option);
  }
};
