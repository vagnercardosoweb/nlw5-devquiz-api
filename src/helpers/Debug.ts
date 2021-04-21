import debug from 'debug';

interface IRequest {
  args?: any[];
  message: any;
  namespace?: string;
}

class Debug {
  public run({ args, message, namespace = 'main' }: IRequest): void {
    debug(`app:${namespace}`)(message, ...(args ?? []));
  }
}

export default new Debug();
